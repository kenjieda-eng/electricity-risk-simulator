import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電力 BCP とは｜法人の停電対策・事業継続計画における電力確保の実務ガイド";
const pageDescription =
  "電力 BCP（電力に絞った事業継続計画）の策定方法を法人実務目線で解説。停電・最終保障供給・市場連動高騰の 3 大リスクと、自家発電・蓄電池・契約多重化の対策を 3,200 字で網羅。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/electricity-bcp-for-corporates";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "電力 BCP と一般的な BCP の違いは何ですか？",
    answer:
      "一般的な BCP は事業継続全般（人員・設備・通信・物流・電力など）を扱いますが、電力 BCP はその中で電力供給に関するリスクに特化したものです。停電・小売撤退・市場高騰の 3 大リスクに対する対策を体系化することで、より深い対策が可能になります。",
  },
  {
    question: "中小企業でも電力 BCP は必要ですか？",
    answer:
      "業種により異なります。冷蔵・冷凍商品を扱う食品関連や、24 時間稼働が必要な医療・介護施設では中小企業でも必須です。一方、オフィス業務中心であればテレワーク移行で代替可能なため、優先度は下がります。まず「1 時間停電で何円損失か」を試算してください。",
  },
  {
    question: "自家発電装置と蓄電池はどちらを優先すべきですか？",
    answer:
      "停電継続時間で判断します。1〜2 時間程度の短時間停電が主リスクなら蓄電池（瞬時切替・無音）。半日〜数日の長時間停電を想定するなら自家発電装置（燃料補給で長時間運転可能）。両方併設できれば最も堅牢ですが、初期投資が大きいため業種・予算で選択します。",
  },
  {
    question: "最終保障供給だけで電力 BCP の契約面はカバーできますか？",
    answer:
      "不十分です。最終保障供給は「割高」（一般送配電事業者の標準料金 × 1.2 倍）かつ「契約期間 1 年以内」の制約があります。小売撤退時の緊急対応として活用しつつ、並行して新規小売との契約交渉を進める必要があります。事前に複数社見積もりを取っておくことが推奨されます。",
  },
  {
    question: "電力 BCP の策定にどの程度の期間と費用がかかりますか？",
    answer:
      "リスク棚卸し〜計画書策定まで、社内主導で 2〜3 ヶ月、外部コンサル活用で 1〜2 ヶ月が目安です。設備投資を含めた完全実装は 1〜3 年。コンサル費用は 100〜500 万円、設備費用は 1,000 万円〜数億円と業種・規模で大きく異なります。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 BCP",
    "電力 BCP 法人",
    "停電対策 事業継続",
    "電力 事業継続計画",
    "停電 損失額 試算",
    "自家発電 法人",
    "蓄電池 BCP",
    "契約多重化",
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
      {
        url: "/ogp-default.png",
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
    images: ["/twitter-default.png"],
  },
};

export default function ElectricityBcpForCorporatesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "電力 BCP とは" },
        ]}
        faq={FAQ_ITEMS}
      />

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">リスクシナリオ別に知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">電力 BCP</strong> とは、停電・小売電気事業者の撤退・市場価格急騰といった電力供給リスクに対して、事業継続を確保するための計画です。本記事では、エネルギー全般を扱う{" "}
          <Link href="/energy-bcp-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            一般的な BCP（エネルギー総合版）
          </Link>{" "}
          ではなく「電力に絞った場合のガイド」として、3 大リスクと 4 つの対策を実務目線で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 1. 電力 BCP とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. 電力 BCP とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力 BCP は、電力供給に関わるリスク（自然災害による停電、小売電気事業者の倒産・撤退、市場価格急騰）に対して、事業継続を確保する計画を指します。広義の BCP の電力部分に特化したもので、停電時の業務継続だけでなく、契約・市場価格まで含めた「電力リスク全体」の備えを体系化します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>従来の BCP: 人員・設備・通信・物流・電力など全社横断のリスクを総合的に扱う</li>
            <li>電力 BCP: 上記のうち「電力」を切り出し、3 大リスクの個別対策まで踏み込む</li>
            <li>近年は気候変動・新電力撤退・JEPX 急騰の同時進行で、電力部分の独立計画化が進む</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            総合版の概念整理は{" "}
            <Link href="/energy-bcp-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              エネルギー BCP の全体像
            </Link>{" "}
            を参照してください。本記事は電力に特化した 3 リスク・4 対策を扱います。
          </p>
        </section>

        {/* 2. 電力 BCP で想定すべき 3 大リスク */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. 電力 BCP で想定すべき 3 大リスク</h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">A. 物理的停電（地震・台風・落雷）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              業種により停電 1 時間で数百万円〜数千万円の損失が発生します。製造業のライン停止、データセンター・医療機関のサービス停止、食品工場の冷蔵庫停止による商品廃棄など、影響は多岐にわたります。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">B. 契約上のリスク（小売撤退・最終保障供給）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2021 年度以降、新電力の市場退出が頻発しています。{" "}
              <Link href="/emergency-supplier-withdrawal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                小売電気事業者の撤退
              </Link>
              に直面した場合、緊急避難先となる{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                最終保障供給
              </Link>
              は「割高」かつ「契約期間限定」のため、長期利用には向きません。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">C. 市場価格急騰（市場連動型プラン）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              寒波・猛暑時の JEPX 50 円/kWh 超え、2022 年 1 月時の想定の 5〜10 倍の請求事例が発生しました。{" "}
              <Link href="/duck-curve-corporate-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ダックカーブ
              </Link>
              の進展により、夕方ピーク時の単価高騰リスクは構造化しています。
            </p>
          </div>
        </section>

        {/* 3. 業種別の電力 BCP 重要度 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. 業種別の電力 BCP 重要度</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力 BCP の必要性は業種によって大きく異なります。停電許容時間と財務損失の試算結果を踏まえて、優先度を判断します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">業種</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">電力 BCP 必要性</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">主な理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2"><Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター</Link></td>
                  <td className="px-3 py-2 font-semibold text-rose-700">🔴 必須</td>
                  <td className="px-3 py-2 text-slate-700">99.99% 稼働率要求、瞬断も許容不可</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2"><Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院</Link></td>
                  <td className="px-3 py-2 font-semibold text-rose-700">🔴 必須</td>
                  <td className="px-3 py-2 text-slate-700">生命維持装置・手術室の継続稼働</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">食品工場</td>
                  <td className="px-3 py-2 font-semibold text-rose-700">🔴 必須</td>
                  <td className="px-3 py-2 text-slate-700">冷蔵・冷凍庫の温度逸脱で商品廃棄</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">製造業（ライン）</td>
                  <td className="px-3 py-2 font-semibold text-amber-700">🟡 重要</td>
                  <td className="px-3 py-2 text-slate-700">ライン再起動コスト・歩留まり低下</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">小売店</td>
                  <td className="px-3 py-2 font-semibold text-amber-700">🟡 重要</td>
                  <td className="px-3 py-2 text-slate-700">レジ停止・冷蔵商品の廃棄</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">オフィス</td>
                  <td className="px-3 py-2 font-semibold text-emerald-700">🟢 推奨</td>
                  <td className="px-3 py-2 text-slate-700">テレワーク移行で部分代替可能</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 電力 BCP の 5 ステップ策定法 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. 電力 BCP の 5 ステップ策定法</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong className="font-semibold text-slate-900">リスク棚卸し</strong>: 自社が想定すべき停電パターン（地域災害・系統障害・落雷）と契約リスク（小売撤退・市場高騰）を列挙する。過去 10 年の実例と地域特性を踏まえて整理。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">影響度評価</strong>: 各リスクの財務影響を試算する。「1 時間停電で何円失うか」「市場価格が 3 倍になった場合の月額負担増」を業務単位で算出。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">対策の選定</strong>: 優先度順に、物理対策（自家発電・蓄電池）と契約対策（複数小売契約・固定プラン化）を組み合わせて決定する。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">実装</strong>: 設備調達・契約変更・社内手順書整備を並行して進める。設備は補助金活用、契約は更新タイミングに合わせて切替を計画。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">訓練・更新</strong>: 年 1 回の停電想定訓練、半年ごとの計画見直しを実施。市場環境・小売各社の経営状況も定期点検する。
            </li>
          </ol>
        </section>

        {/* 5. 電力 BCP の主要対策 4 種 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 電力 BCP の主要対策 4 種</h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">A. 自家発電装置</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              ディーゼル発電機（500 kW 規模で 1,500-3,000 万円）と LP ガス発電機（騒音少・燃料備蓄容易）が主流。長時間停電想定なら燃料補給可能な自家発電が有効。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">B. 産業用蓄電池</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              リチウムイオン蓄電池（500 kWh 規模で 8,000 万円〜）。補助金活用で 30〜50% 圧縮可能。詳細は{" "}
              <Link href="/battery-electricity-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                蓄電池の電気料金対策効果
              </Link>{" "}
              を参照。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">C. 契約多重化</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              メイン小売 + サブ小売の 2 社契約により、一方が撤退・倒産しても切替時間を最小化できます。容量拠出金の単価傾向は{" "}
              <Link href="/what-is-capacity-contribution" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                容量拠出金とは（単価表・月額試算）
              </Link>{" "}
              で確認可能。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">D. デマンドレスポンス契約</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              緊急時の使用抑制で対価を獲得しつつ、系統への貢献も果たす契約。詳細は{" "}
              <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                DR の収益モデル
              </Link>{" "}
              および{" "}
              <Link href="/negawatt-trading-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ネガワット取引の仕組み
              </Link>{" "}
              を参照。
            </p>
          </div>
        </section>

        {/* 6. まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. まとめ｜自社診断のすすめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力 BCP は 3 リスク（停電・契約・価格）を包括的にカバーする計画</li>
            <li>業種により優先度が大きく異なるため、まず「自社が止まると 1 時間で何円失うか」を試算する</li>
            <li>4 対策（自家発電・蓄電池・契約多重化・DR）は単独より組み合わせのほうが堅牢</li>
            <li>計画は年次更新し、訓練と市場点検を継続する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずはシミュレーターで自社の電力リスクスコアを確認し、関連するリスクシナリオ記事と合わせて計画策定の優先度を整理しましょう。
          </p>
        </section>
      </section>

      {/* FAQ */}
      <div className="mt-8">
        <MarketDataFaq heading="よくある質問" items={FAQ_ITEMS} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/", title: "電気料金上昇リスク診断", description: "30 秒で自社のリスクスコアと年間影響額を試算できます。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "請求書に直接効く燃料費調整の仕組みを確認できます。" },
            { href: "/energy-bcp-overview", title: "エネルギー BCP の全体像", description: "電力以外（ガス・燃料）も含む総合 BCP の考え方を整理。" },
            { href: "/last-resort-supply", title: "最終保障供給とは", description: "小売撤退時の緊急避難先と利用上の注意点を解説。" },
            { href: "/emergency-supplier-withdrawal", title: "新電力の撤退・倒産リスク", description: "新電力撤退時に法人が直面する事象と対応の流れを整理。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池の電気料金対策効果", description: "ピークシフトと BCP 兼用の試算と回収期間を確認。" },
            { href: "/demand-response-revenue-model", title: "DR の収益モデル", description: "緊急時の節電で収入を得る仕組みと事業者比較。" },
            { href: "/duck-curve-corporate-impact", title: "ダックカーブが法人に与える影響", description: "夕方単価高騰の構造的リスクを BCP の視点で確認。" },
            { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価", description: "供給力確保コストの転嫁構造を踏まえた契約点検。" },
          ]}
        />
      </div>

      {/* AuthorBadge */}
      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="自社の電力リスクをシミュレーターで可視化し、3 リスク（停電・契約・価格）のうちどこから対策すべきかを整理しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/risk-scenarios", label: "リスクシナリオ記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
