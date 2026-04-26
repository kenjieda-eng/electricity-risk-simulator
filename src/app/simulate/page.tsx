import type { Metadata } from "next";
import HomePageClient from "../_components/HomePageClient";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const pageTitle =
  "電気料金上昇リスク診断｜法人電気料金ナビ";
const pageDescription =
  "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。30秒で診断できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電気料金シミュレーター"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/simulate",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/simulate",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
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

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "シミュレーション結果はどの程度の精度ですか？",
    answer:
      "実料金との誤差は概ね ±5-10% です。基本料金・電力量料金・燃料費調整額・再エネ賦課金は公的データに基づき計算しますが、各小売電気事業者の独自割引や深夜時間帯料金体系は反映されない場合があります。実際の契約検討時は各社個別見積もりとの併用を推奨します。",
  },
  {
    question: "シミュレーションは無料で利用できますか？",
    answer:
      "はい、完全無料です。ユーザー登録も不要で、入力内容は当社サーバーに保存されません。ブラウザのセッションのみで処理されるため、企業の機微情報を含む電力使用データを安心して入力いただけます。診断結果のシェアやダウンロードは可能ですが、外部送信は一切ありません。",
  },
  {
    question: "高圧契約と低圧契約のどちらにも対応していますか？",
    answer:
      "両方に対応しています。低圧（〜49kW）は基本料金 + 電力量料金 + 燃料費調整額 + 再エネ賦課金の標準計算、高圧（50〜1,999kW）は契約電力（kW）と力率を考慮した計算、特別高圧（2,000kW〜）は容量拠出金や調整力コストを含む計算となります。診断初期画面で契約区分を選択してください。",
  },
  {
    question: "再生可能エネルギー比率の高いプラン（CO2 ゼロプラン等）も比較できますか？",
    answer:
      "対応しています。シミュレーション結果画面で「環境価値オプション」のフィルタを ON にすると、非化石証書付き / グリーンメニュー / RE100 対応プランが優先表示されます。料金は通常 0.5〜2 円/kWh 上乗せされる傾向ですが、CSR 報告や Scope2 排出量削減には有効です。",
  },
  {
    question: "シミュレーション結果を担当者に共有するにはどうすればよいですか？",
    answer:
      "結果画面右上の「共有」ボタンから、URL リンク（24 時間有効）か PDF ダウンロードを選択できます。URL は入力データを暗号化して埋め込むため、メールや社内チャットで安全に共有できます。社内決裁用には PDF 版（A4 縦 2-3 ページ、グラフ付き）がよく使われます。",
  },
];


export default function SimulatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "シミュレーター" },
        ]}
      />
      <FaqPageJsonLd faqs={FAQ_ITEMS} />
      <section id="simulator">
        <HomePageClient />
      </section>

      <section className="mx-auto mb-8 max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
            <div className="mt-4">
              <MarketDataFaq items={FAQ_ITEMS} />
            </div>
          </section>
          <RelatedLinks
            heading="あわせて使いたいツール・解説"
            links={[
              {
                href: "/compare",
                title: "料金メニュー比較",
                description: "固定プランと市場連動プランの違いを比較診断",
              },
              {
                href: "/how-to",
                title: "電力料金上昇リスク診断の使い方",
                description: "入力とリスク要因の読み方をステップで確認できます。",
              },
              {
                href: "/articles",
                title: "解説記事一覧",
                description: "料金の仕組み・上昇要因・契約見直しのポイントをテーマ別に整理。",
              },
              {
                href: "/concierge",
                title: "AI コンシェルジュで関連情報を探す",
                description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
              },
              {
                href: "/articles/basic",
                title: "法人電気料金の基礎知識",
                description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。",
              },
            ]}
          />
          <AuthorBadge />
        </div>
      </section>
    </>
  );
}
