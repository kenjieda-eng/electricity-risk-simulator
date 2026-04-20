import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "電力会社を変えずに電気代を下げる方法｜契約内見直し編";
const pageDescription =
  "電力会社の切替に消極的な法人向けに、同じ会社のまま電気代を下げる5つの手段を解説。契約電力見直し・プラン変更・時間帯別プラン・付帯サービス活用・値引き交渉までを効果と難易度つきで整理し、切替との比較も掲載します。";
const pageUrl =
  "https://simulator.eic-jp.org/reduce-cost-without-switching";

// --- 5つの手段 ---
type Method = {
  title: string;
  desc: string;
  effect: string;
  difficulty: string;
  suitableFor: string;
  caveat: string;
};

const methods: Method[] = [
  {
    title: "1. 契約電力の見直し",
    desc: "実デマンドの履歴と契約電力の乖離を確認し、過大契約分を引き下げます。高圧の場合は30分デマンドの年間最大値をもとに判断し、低圧電力の場合は主開閉器容量やスマートメーターデータを参照します。",
    effect: "基本料金の-5〜20%",
    difficulty: "★☆☆（電力会社への申請のみ）",
    suitableFor: "過去数年、契約電力の見直しをしていない法人",
    caveat: "引き下げ後1年以内に超過するとペナルティがかかるため、年間最大値＋安全マージンを確保する",
  },
  {
    title: "2. 同じ会社内でのプラン変更",
    desc: "多くの電力会社は、複数の料金メニューを用意しています。業務形態が変わったのに当初のプランのままだと損をしているケースがあります。単価が固定の標準プラン、時間帯別プラン、再エネ指定プランなどの選択肢を確認しましょう。",
    effect: "電力量料金の-2〜10%",
    difficulty: "★★☆（営業担当への問合せ＋切替手続き）",
    suitableFor: "契約後3年以上プランを見直していない法人",
    caveat: "プラン変更に違約金が発生するケースがあるため、契約条項を要確認",
  },
  {
    title: "3. 時間帯別プランへの移行",
    desc: "夜間時間帯の使用比率が高い場合（製造業の夜間操業・24時間倉庫・データセンター等）は、時間帯別料金プランへの移行で大幅な削減が期待できます。平日日中の使用が中心の業態では逆効果になるため、使用パターンの確認が先行必要です。",
    effect: "夜間中心の業態で-10〜20%、日中中心は悪化する可能性あり",
    difficulty: "★★☆（使用実績分析＋プラン切替）",
    suitableFor: "夜間帯の使用量が全体の30%以上ある法人",
    caveat: "誤って移行すると逆にコスト増となるため、シミュレーション必須",
  },
  {
    title: "4. 付帯サービスの活用",
    desc: "電力会社が無償または低額で提供しているデマンド監視サービス、請求書分析、設備診断などを活用します。これ自体は電気料金の直接値引きではありませんが、運用改善によって基本料金・電力量料金の両方を抑えられます。",
    effect: "運用改善を通じて-3〜15%",
    difficulty: "★★★（運用ルール策定と現場定着が必要）",
    suitableFor: "BEMS・EMSを導入しきれていない中規模法人",
    caveat: "無償サービスでも、一定の契約継続や送客条件が付くことがある",
  },
  {
    title: "5. 交渉による値引き（長期契約優待・大口割引）",
    desc: "契約更新のタイミングで、長期契約優待・大口割引・競合見積もり提示による値引き交渉を行います。担当者との関係性や市況によって結果は異なりますが、何も言わなければ何も下がらないのは確かです。",
    effect: "-0.1〜0.5円/kWh程度の単価引き下げ",
    difficulty: "★★★★（交渉材料の準備が鍵）",
    suitableFor: "月額100万円超で、長期契約に応じられる法人",
    caveat: "競合見積もりを実際に取得してから交渉するほうが通りやすい",
  },
];

// --- 切替との効果比較 ---
const comparisonRows: {
  item: string;
  keepCompany: string;
  switchCompany: string;
}[] = [
  {
    item: "期待削減幅",
    keepCompany: "-3〜15%（手段の組み合わせ次第）",
    switchCompany: "-5〜25%（相見積もり次第）",
  },
  {
    item: "手続き負荷",
    keepCompany: "低（同一社内の書類変更のみ）",
    switchCompany: "中（供給地点特定番号・契約締結等）",
  },
  {
    item: "スイッチングコスト",
    keepCompany: "基本的になし",
    switchCompany: "既存契約の違約金が発生する場合あり",
  },
  {
    item: "リスク",
    keepCompany: "低（契約関係は継続）",
    switchCompany: "新電力の経営状況・撤退リスクに留意",
  },
  {
    item: "適性",
    keepCompany: "大手既存契約で関係性重視の法人",
    switchCompany: "コスト最適化を最優先にできる法人",
  },
];

// --- 進め方ステップ ---
const steps: { step: string; title: string; body: string }[] = [
  {
    step: "STEP 1",
    title: "過去12ヶ月の請求実績をそろえる",
    body: "検針月・使用量・デマンド・基本料金・電力量料金・燃調・再エネ賦課金の6項目を時系列で揃えます。現状把握なしに見直しは進みません。",
  },
  {
    step: "STEP 2",
    title: "契約電力・プラン種別を確認する",
    body: "契約書・約款を開き、現行のプラン名と単価構造を把握します。同じ会社内にどんなプランがあるかも調べます。",
  },
  {
    step: "STEP 3",
    title: "電力会社の営業担当に見直し意向を伝える",
    body: "「削減したい」と率直に伝えれば、担当者が複数の打ち手を提案してくれます。黙っていても何も始まりません。",
  },
  {
    step: "STEP 4",
    title: "付帯サービス・交渉材料を整理する",
    body: "BEMSや請求書分析が提案されたら活用を検討。競合の相見積もりがあれば交渉材料として示します。",
  },
  {
    step: "STEP 5",
    title: "同時に「切替した場合」も必ず試算する",
    body: "現契約内の見直しだけでは削減幅が限られることもあるため、切替した場合の比較試算を必ず併走させます。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 下げる 電力会社 変えない",
    "電気代 削減 切替 しない",
    "法人 電気代 値引き 交渉",
    "電力会社 プラン変更 法人",
    "契約電力 見直し 削減",
    "電気代 同じ電力会社 削減",
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
export default function ReduceCostWithoutSwitchingPage() {
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
          { name: "電力会社を変えずに電気代を下げる方法" },
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
          <span className="text-slate-700">電力会社を変えずに電気代を下げる方法</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            見直しポイントを知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            電力会社を変えずに電気代を下げる方法｜契約内見直し編
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「切替は面倒」「既存の電力会社との関係を崩したくない」「新電力撤退のニュースが不安」──
            こうした理由から、電力会社を変えない前提で電気代を下げたい法人は少なくありません。
            実は、同じ電力会社との契約内だけでも、5つの打ち手で月額の数%〜10%以上を削減できるケースがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、切替以外の削減手段を効果・難易度・適性とあわせて整理し、
            切替した場合との効果比較、実行の5ステップまで解説します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 前提 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ「切替しない」選択肢に意味があるか
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力会社の切替は削減の王道ですが、すべての法人にとって最適解とは限りません。
              大手電力会社の規制料金との併用、銀行系融資の付帯条件、グループ会社の関係など、
              切替に躊躇する経済合理的な理由があるケースも存在します。
              また、小規模な新電力への切替は撤退リスクも考慮する必要があります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              そうした場合でも、まずは同じ電力会社との契約内で削減余地を洗い出すことで、
              数十万円単位のコスト削減が可能です。以下の5つの手段から、
              自社に合うものを選んで実行することをおすすめします。
            </p>
          </section>

          {/* 5つの手段 */}
          {methods.map((m) => (
            <section
              key={m.title}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h2 className="text-xl font-semibold text-slate-900">{m.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {m.desc}
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
                  <p className="text-xs font-semibold text-emerald-700">
                    期待効果
                  </p>
                  <p className="mt-1 text-sm font-bold text-emerald-700">
                    {m.effect}
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-center">
                  <p className="text-xs font-semibold text-sky-700">実行難易度</p>
                  <p className="mt-1 text-sm font-bold text-sky-700">
                    {m.difficulty}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">
                    向いている法人
                  </p>
                  <p className="mt-1 text-sm text-slate-700">{m.suitableFor}</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
                  <p className="text-xs font-semibold text-amber-700">注意点</p>
                  <p className="mt-1 text-sm text-slate-700">{m.caveat}</p>
                </div>
              </div>
            </section>
          ))}

          {/* 切替との比較 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              切替との効果比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約内見直しと切替は、どちらかを選ぶというより、
              まず契約内見直しで現契約の適正化を行い、それでも効果が足りなければ切替を検討するのが実務的です。
              期待削減幅・手続き負荷・リスクの比較は以下のとおりです。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      観点
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      契約内見直し
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      電力会社切替
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.keepCompany}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.switchCompany}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 実行ステップ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約内見直しの進め方（5ステップ）
            </h2>
            <div className="mt-4 space-y-3">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold tracking-wide text-sky-700">
                    {s.step}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  電力会社を変えずに電気代を下げる手段は5つ。契約電力見直し・プラン変更・時間帯別プラン・付帯サービス・交渉。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  期待削減幅は合計で-3〜15%程度。切替の-5〜25%と比べると控えめだが手続き負荷も小さい。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  まず契約電力の適正化から着手。その後プラン変更・交渉へ段階的に進める。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  並行して切替後の試算も行い、効果の大小で最終判断する。
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
                href: "/contract-demand-what-is-it",
                title: "契約電力とは",
                description:
                  "契約電力の意味と、過大契約・適正化の判断軸を整理します。",
              },
              {
                href: "/demand-value-guide",
                title: "デマンド値の見方",
                description:
                  "30分デマンドの確認方法と、契約電力引き下げ判断のベースとなる実績値の読み方。",
              },
              {
                href: "/switching-business-electricity-contract",
                title: "法人の電力契約を切り替えるときの実務",
                description:
                  "切替を選択する場合の手続きと注意点を実務向けに整理します。",
              },
              {
                href: "/compare-business-electricity-estimates",
                title: "法人向け電気料金見積の比較方法",
                description:
                  "相見積もりを取って条件を並べるときの実務ポイント。",
              },
              {
                href: "/electricity-contract-cancellation-renewal-terms",
                title: "契約の解約・更新条項の読み方",
                description:
                  "プラン変更時の違約金の有無を確認するための条項の読み方。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="契約内見直しと切替、どちらが効くかを数値で比較する"
            description="自社の契約条件と使用量を入力すると、現行プランのコストと切替した場合の削減余地を並べて確認できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門スタッフに相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="切替なしでの電気代削減、専門家に相談しませんか？"
            description="現行契約のままで実行できる削減施策の洗い出しから優先順位づけ、効果試算まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
