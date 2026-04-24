import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "電気代の勘定科目｜水道光熱費・製造経費・販管費の使い分けと仕訳処理の完全ガイド【法人経理】";
const pageDescription =
  "電気代の勘定科目は「水道光熱費」「製造経費」「販売管理費」のどれ？事業用・家事按分、インボイス制度対応、自家消費太陽光の仕訳まで、法人経理担当者が実務で迷わない判断基準を事例付きで解説。";
const pageUrl =
  "https://simulator.eic-jp.org/electricity-expense-accounting-guide";

// --- 勘定科目の使い分け ---
const accountTypeRows: {
  account: string;
  industry: string;
  usage: string;
  example: string;
}[] = [
  {
    account: "水道光熱費（販管費）",
    industry: "一般法人・サービス業・卸小売",
    usage: "事務所・店舗・営業所の電気代",
    example: "本社オフィス、支店、営業所、店舗",
  },
  {
    account: "製造経費・製造原価",
    industry: "製造業",
    usage: "工場の生産設備で使う電気代",
    example: "工場の機械動力・生産設備・クリーンルーム",
  },
  {
    account: "販売費及び一般管理費内訳",
    industry: "小売・飲食・サービス",
    usage: "店舗の照明・冷蔵機器等",
    example: "店舗什器・レジ・冷蔵ショーケース",
  },
  {
    account: "地代家賃（水道光熱費込み家賃）",
    industry: "テナント入居時",
    usage: "家賃に電気代が含まれる契約",
    example: "サービスオフィス、共益費込賃借",
  },
];

// --- インボイス対応 ---
const invoiceCheckItems: { title: string; body: string }[] = [
  {
    title: "請求書上の登録番号（T+13桁）を確認",
    body: "2023年10月以降の請求書には、電力会社の適格請求書発行事業者の登録番号が記載されます。請求書テンプレートで登録番号の位置を特定し、会計ソフトに電力会社の登録番号を事業者マスタへ登録しておくことで、毎月のチェック業務を自動化できます。",
  },
  {
    title: "税率別合計・消費税額の内訳確認",
    body: "電気代は原則10%課税で一本ですが、請求書内に他の項目（書類送付料・燃料費調整額など）が混在する場合、税率区分が分かれるケースがあります。請求書上の税率別合計額を確認し、仕訳時に税率区分を正しく設定します。",
  },
  {
    title: "電子請求書の保存要件",
    body: "電子取引（PDFメール添付・Web請求書）の場合、電子帳簿保存法の保存要件（真実性・可視性）を満たす保存が必要です。タイムスタンプ付与または訂正削除履歴の残るシステム保存を採用します。紙印刷での保存は、2024年1月以降の電子取引分では認められません。",
  },
  {
    title: "適格事業者でない場合の対応",
    body: "一部の小規模な太陽光発電事業者（FIT買取事業者等）からの電力購入では、適格事業者でないケースもあります。この場合は仕入税額控除の経過措置（2026年9月までは80%、2029年9月までは50%控除可）を適用して処理します。",
  },
];

// --- 按分・集計 ---
const allocationCases: { title: string; body: string }[] = [
  {
    title: "事業用と家事用の按分（個人事業主）",
    body: "自宅兼事務所の場合、床面積比・使用時間比・コンセント数比のいずれかで事業用割合を算定します。例：床面積の40%を事務所として使用 → 電気代の40%を必要経費計上。按分基準は継続適用が原則で、合理的な根拠資料（間取り図・勤務実態）を保管します。",
  },
  {
    title: "複数事業所の集計",
    body: "本社・支店・店舗で別々の契約がある場合、勘定科目は「水道光熱費」で統一し、補助科目（部門コード）で事業所別に管理するのが標準です。本社直接契約の電気代を事業所別に按分配賦する場合は、使用量比・売上比など合理的な基準で配賦記録を残します。",
  },
  {
    title: "テナント・サブメーター按分",
    body: "ビル一括契約で入居テナントに電気代を按分請求する形式では、サブメーター実測値を基に按分計算書を作成し、テナントごとの月額を算定します。請求事業者が大家の場合、サブメーター請求は「収入（雑収入等）」として計上する必要があります。",
  },
  {
    title: "自家消費太陽光の仕訳",
    body: "屋根上太陽光を自家消費する場合、発電された電力に対する直接的な仕訳はありませんが、購入電力量が減少する形で電気代が下がります。蓄電池・PV設備は「機械装置」または「工具器具備品」として資産計上し、耐用年数17年（太陽光発電設備）で減価償却します。",
  },
];

// --- 年度末処理 ---
const yearEndItems: { title: string; body: string }[] = [
  {
    title: "未払費用の計上",
    body: "3月末時点で検針済みの電気代は確定ですが、検針日から月末までの分は未請求です。月末までの使用量を日割り按分で算定し、「未払費用（流動負債）/ 水道光熱費」で計上します。翌月の請求書受領時に差額を振替します。",
  },
  {
    title: "前払費用の計上",
    body: "基本料金が月初一括請求される契約では、年度末に翌期分の前払部分が発生する場合があります。金額が少額なら重要性の原則で費用処理、一定額以上なら「前払費用（流動資産）」で期間按分します。",
  },
  {
    title: "消費税区分の最終チェック",
    body: "年間を通じて仕訳した電気代の税率区分を、決算時に一覧表でダブルチェックします。特に2023年10月のインボイス制度開始以降・2024年1月の電子保存義務化以降は、年度を跨いだルール変更に注意が必要です。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 勘定科目",
    "電気代 仕訳",
    "水道光熱費 製造経費",
    "電気代 インボイス",
    "電気代 按分",
    "法人 電気代 経理",
    "電気代 家事按分",
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
        url: "/api/og/accounting-tax",
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
    images: ["/api/og/accounting-tax"],
  },
};

// --- Page Component ---
export default function ElectricityExpenseAccountingGuidePage() {
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
            name: "電気代の経理・税務",
            url: "https://simulator.eic-jp.org/articles/accounting-tax",
          },
          { name: "電気代の仕訳と勘定科目" },
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
            href="/articles/accounting-tax"
            className="hover:text-sky-700 hover:underline"
          >
            電気代の経理・税務
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">仕訳と勘定科目ガイド</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            電気代の経理・税務
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            電気代の仕訳と勘定科目｜法人の経理担当者向けガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の経理処理は、勘定科目の選び方・按分・インボイス対応・年度末の未払費用など、
            業種や契約形態により論点が分かれます。
            本ガイドでは、<strong>一般法人向け</strong>と<strong>製造業・店舗業向け</strong>の使い分けを軸に、
            経理担当者が月次・年次処理で押さえておきたい実務を整理します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            より高度な部門配賦・原価計算は
            <Link
              href="/electricity-expense-accounting"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気代の勘定科目と仕訳（部門配賦と月次締めの実務）
            </Link>
            も合わせてご参照ください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 勘定科目の使い分け */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              勘定科目の使い分け
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代の勘定科目は、大きく<strong>水道光熱費（販管費）</strong>と<strong>製造経費・製造原価</strong>に分かれます。
              製造業では工場で発生する電気代を製造原価に、事務所・本社分を水道光熱費に分ける二元管理が基本です。
              一般法人（サービス業・卸小売）は水道光熱費で一本化するのが標準です。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      勘定科目
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      適用業種
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      主な用途
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      例
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {accountTypeRows.map((row) => (
                    <tr
                      key={row.account}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.account}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.industry}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.usage}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.example}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 業種別の典型仕訳 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別の典型仕訳例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別に、月次での電気代計上の典型仕訳を示します。いずれも税込経理を前提としています。
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  【一般法人】本社オフィスの電気代 110,000円（税込）を普通預金から支払
                </p>
                <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-slate-700">{`（借）水道光熱費  100,000
   仮払消費税    10,000
（貸）普通預金   110,000`}</pre>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  【製造業】工場で消費した電気代 550,000円、事務所分 110,000円をまとめて支払
                </p>
                <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-slate-700">{`（借）製造経費（電力料）500,000
   水道光熱費        100,000
   仮払消費税         60,000
（貸）普通預金        660,000`}</pre>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  【店舗業】店舗の電気代 33,000円を口座振替、同時に期末の未払分10,000円を計上
                </p>
                <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-slate-700">{`（借）水道光熱費 30,000   （貸）普通預金 33,000
   仮払消費税  3,000
（借）水道光熱費 10,000   （貸）未払費用 10,000`}</pre>
              </div>
            </div>
          </section>

          {/* 按分と集計 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              按分と集計の実務
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業用・家事用の按分や複数事業所の集計は、毎月の処理方式を固定しておくことが重要です。
              以下の4ケースで典型手順を整理します。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {allocationCases.map((a, i) => (
                <div
                  key={a.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {a.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* インボイス対応 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              インボイス制度対応（4つのチェック）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2023年10月の制度開始以降、電気代の請求書でも適格請求書の要件確認が経理の標準業務になりました。
              以下4点を月次業務のチェックリストに組み込みます。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {invoiceCheckItems.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 年度末処理 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              年度末処理（未払・前払・決算調整）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代は検針日と支払日のタイミングが期末と一致しないため、期間対応を正しく反映する仕訳が必要です。
            </p>

            <div className="mt-4 space-y-3">
              {yearEndItems.map((y) => (
                <div
                  key={y.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {y.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {y.body}
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
                  勘定科目は一般法人なら「水道光熱費」、製造業は工場分を「製造経費」と切り分ける二元管理が標準。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  個人事業主の家事按分は床面積・時間比など合理的基準で継続適用、根拠資料を保管。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  インボイス対応は登録番号・税率区分・電子保存要件の3点を月次でチェック。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  期末の未払費用計上で期間対応を正確に反映。PV・蓄電池は資産計上で減価償却を別建管理。
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
                href: "/electricity-expense-accounting",
                title: "電気代の勘定科目と仕訳｜部門配賦と月次締めの実務",
                description:
                  "部門配賦・月次締めの応用編。本ガイドをマスターした後に。",
              },
              {
                href: "/invoice-system-electricity",
                title: "インボイス制度と電気代",
                description:
                  "適格請求書・免税事業者からの仕入税額控除の経過措置を整理。",
              },
              {
                href: "/electricity-cost-abc-allocation",
                title: "電気代の部門別・製品別配賦方法｜ABC原価計算の実務",
                description:
                  "製造業向け。製品原価への正確な配賦方法を解説。",
              },
              {
                href: "/solar-battery-depreciation",
                title: "蓄電池・太陽光設備の減価償却と税務扱い",
                description:
                  "自家消費太陽光の仕訳と、資産計上後の減価償却の実務。",
              },
              {
                href: "/soho-sole-proprietor-electricity-tax",
                title: "個人事業主・SOHOの電気代経費計上",
                description:
                  "家事按分の具体的な計算例と根拠資料。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="電気代の経理・税務でお困りの方へ"
            description="勘定科目の選定、按分基準の設計、インボイス対応の実務など、電気代の経理処理に関するご質問を受け付けています。"
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
            heading="電気代の経理処理や税務対応、専門家に相談しませんか？"
            description="電気料金の勘定科目整理から省エネ投資の税制優遇活用、コスト配賦の設計まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-24" />
      </main>
    </>
  );
}
