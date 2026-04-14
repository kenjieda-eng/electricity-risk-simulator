import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "オフィスビル：契約電力の適正化で年間580万円削減した事例";
const pageDescription =
  "築18年のオフィスビルが電力需要の実態調査と契約電力の適正化を行い、年間580万円（16%）の電気代削減を達成した事例。テナント変動に伴う過大契約の発見から見直し実施までの手順を詳説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-office-building-review";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["オフィスビル 電気代削減", "ビル 契約電力 適正化", "テナントビル 電力見直し", "オフィス 電力契約", "ビル管理 電気代", "契約電力 過大 削減"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const beforeAfter = [
  { item: "契約電力", before: "1,200kW", after: "900kW", diff: "▲300kW（▲25%）" },
  { item: "基本料金（月額）", before: "2,544,000円", after: "1,908,000円", diff: "▲636,000円" },
  { item: "電力量料金（月額）", before: "1,840,000円", after: "1,780,000円", diff: "▲60,000円" },
  { item: "燃料費調整額（月額）", before: "580,000円", after: "560,000円", diff: "▲20,000円" },
  { item: "合計（月額）", before: "4,964,000円", after: "4,248,000円", diff: "▲716,000円" },
  { item: "合計（年額）", before: "約3,700万円", after: "約3,120万円", diff: "▲約580万円" },
];

const floorData = [
  { floor: "B1〜1F", use: "共用部・駐車場・機械室", peakKw: 180, note: "空調・エレベーター・照明" },
  { floor: "2〜4F", use: "中小テナントオフィス", peakKw: 220, note: "PC・空調・OA機器" },
  { floor: "5〜8F", use: "コールセンター（主要テナント）", peakKw: 280, note: "24時間稼働・大型空調" },
  { floor: "9〜12F", use: "一般オフィステナント", peakKw: 150, note: "日中のみ稼働" },
  { floor: "13F", use: "会議室・共用スペース", peakKw: 45, note: "利用時間が限定的" },
  { floor: "屋上", use: "空調室外機・設備機器", peakKw: 95, note: "夏季ピーク大" },
];

export default function CaseStudyOfficeBuildingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">オフィスビル：580万円削減事例</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          オフィスビル：契約電力の適正化で年間580万円削減した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">賃貸オフィスビル（地上13階・テナント12社）／ 特別高圧受電</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          築18年・地上13階の賃貸オフィスビルが、テナント入れ替えに伴う電力需要の変化を見直さないまま高い契約電力を維持していた問題を発見。
          過去2年分のデマンドデータを精査し、実態に即した契約電力1,200kW→900kWへの引き下げを実施。
          基本料金を中心に年間<strong>約580万円（16%）の削減</strong>を達成しました。
        </p>
      </header>

      {/* ビルプロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ビル・施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["建物用途", "賃貸オフィスビル"],
                ["規模", "地上13階・地下1階（延床面積約18,500m²）"],
                ["築年数", "18年"],
                ["テナント数", "12社"],
                ["立地", "首都圏郊外（駅前立地）"],
                ["受電区分", "特別高圧（22kV）"],
                ["契約電力（見直し前）", "1,200kW"],
                ["契約電力（見直し後）", "900kW"],
                ["年間使用電力量", "約4,200,000kWh"],
                ["見直し前の年間電気代", "約3,700万円"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* フロア別電力使用状況 */}
        <h3 className="mt-5 text-base font-semibold text-slate-900">フロア別電力需要の内訳（推定ピーク）</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">フロア</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">用途</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">推定ピーク</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {floorData.map((row) => (
                <tr key={row.floor}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.floor}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.use}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.peakKw}kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700" colSpan={2}>合計（同時稼働係数0.85適用後）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約820kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">実際の最大デマンド実績は876kW（過去2年間の最大値）。契約電力900kWは十分な余裕を確保。</p>
      </section>

      {/* 課題 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">問題の発端と課題</h2>
        <ul className="mt-4 space-y-3">
          {[
            "5年前まで入居していた大口テナント（IT企業、常時500名超が勤務）が退去し、現在は中小規模テナントが中心になったにもかかわらず、契約電力を見直していなかった。",
            "契約電力1,200kWは過去の最大デマンド1,150kWに合わせて設定されたが、現在の実際の最大デマンドは876kWに低下していた。",
            "ビル管理会社の担当者が電力契約の専門知識を持っておらず、「デマンドと契約電力の関係」を把握していなかった。",
            "基本料金が月額250万円超になっており、電気代の最大費目にもかかわらず見直しの優先度が低かった。",
            "テナントからの電気代の徴収方法（按分方式）が複雑で、全体コストの把握が困難だった。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 施策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">実施した施策</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              step: "STEP 1",
              title: "過去2年分のデマンドデータ分析",
              detail: "電力会社の明細書（30分単位のデマンドデータ）を取得し、月別最大デマンドを整理。実績最大値は876kW（夏季）であることを確認。年間を通じて契約電力1,200kWを超えた月はゼロ。",
            },
            {
              step: "STEP 2",
              title: "フロア別電力需要調査・将来テナント需要の予測",
              detail: "フロアごとの推定ピーク電力を積み上げ計算。同時稼働係数を考慮した最大需要電力は約820kW。将来的なテナント入れ替えリスクを考慮し、20%の余裕を見て契約電力を900kWに設定。",
            },
            {
              step: "STEP 3",
              title: "電力会社への契約電力変更申請",
              detail: "電力会社に対してデマンドデータと需要計算根拠を提示し、契約電力の引き下げを申請。変更時期を電力需要の低い春季に設定し、リスクを最小化。",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">{m.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 削減結果 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">削減結果（Before / After）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((row, i) => (
                <tr key={i} className={i === beforeAfter.length - 1 ? "bg-sky-100 font-bold" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.item}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.before}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.after}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CSS バー */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">費目別削減率</h3>
          <div className="space-y-3">
            {[
              { label: "基本料金（契約電力削減の効果）", rate: 25, color: "bg-sky-500" },
              { label: "電力量料金（省エネ効果等）", rate: 3, color: "bg-indigo-400" },
              { label: "燃料費調整額", rate: 3, color: "bg-amber-400" },
              { label: "合計", rate: 16, color: "bg-green-500" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.rate}%削減</span>
                </div>
                <div className="h-3 w-full rounded bg-slate-200">
                  <div className={`h-3 rounded ${bar.color}`} style={{ width: `${bar.rate * 3.5}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 見直し前後の契約条件比較テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">見直し前後の契約条件比較</h2>
        <p className="mt-2 text-sm text-slate-600">主要な契約条件の変更内容と差額の一覧</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,200kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">900kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲300kW（▲25%）</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金（月額）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">2,544,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,908,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲636,000円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金（月額）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,840,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,780,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲60,000円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額（月額）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">580,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">560,000円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲20,000円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンド管理レビュー</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">なし（放置）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">2〜3年ごとに実施</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">継続効果</td>
              </tr>
              <tr className="bg-sky-100 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">合計（年額）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約3,700万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約3,120万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲約580万円</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因・教訓</h2>
        <ul className="mt-4 space-y-3">
          {[
            "テナント変動後の契約電力未見直しという「放置コスト」を可視化：担当者が変わるタイミングで見落とされやすい",
            "実績データに基づく客観的な申請：デマンドデータを証拠として提示したことで電力会社との交渉がスムーズ",
            "将来リスクへの余裕設計：単純に最低限まで下げるのではなく、テナント入れ替え時のリスクを考慮した安全マージンを確保",
            "ビル管理会社への教育：今後も定期的（2〜3年ごと）にデマンドデータと契約電力のレビューを実施するプロセスを整備",
            "低コストで大きな効果：設備投資なし・手続きのみで年間580万円の削減を実現",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">✓</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 担当者コメント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">担当者コメント</h2>
        <blockquote className="mt-4 border-l-4 border-sky-400 pl-4 text-sm leading-7 text-slate-700 sm:text-base italic">
          「設備を何も変えなくても、契約変更だけでこれだけ削減できるとは正直驚きました。
          コストをかけず、手続きだけで年間580万円の削減は非常に大きいです。
          今後はテナント変更のたびに需要調査を実施するルールにしました。
          ビル管理においてデマンドの定期点検は必須だと感じています。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 不動産管理部 ビル管理担当</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">ビルオーナー・管理会社の方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          テナント構成が変わった、増減床があった、契約電力を長年変更していない、という場合は契約電力の見直し余地がある可能性があります。
          <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドと契約電力の仕組み</Link>を確認の上、
          過去2年分の最大デマンド実績と現在の契約電力を比較してみてください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/contract-demand-what-is-it", title: "デマンドとは", description: "契約電力の決まり方とデマンド管理の基本" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべきこと" },
            { href: "/case-study-manufacturing-cost-reduction", title: "製造業：年間18%削減した事例", description: "デマンド制御と新電力切り替えの組み合わせ事例" },
            { href: "/case-study-hospital-peak-cut", title: "病院：デマンド制御で基本料金22%圧縮", description: "非医療設備を対象にしたデマンド制御事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="あなたのビルの契約電力は適正ですか？"
          description="シミュレーターで現在の契約状況のリスクを確認。契約電力の過大設定がないか診断できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
  );
}
