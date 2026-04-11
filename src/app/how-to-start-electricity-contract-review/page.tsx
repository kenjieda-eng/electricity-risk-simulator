import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人の電力契約見直しは何から始めるべきか";
const pageDescription =
  "法人向け電力契約の見直しを始めたいが、何から手を付ければよいか分からない担当者向けに、資料確認から比較、社内整理までの進め方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-start-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-start-electricity-contract-review",
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

export default function HowToStartElectricityContractReviewPage() {
  return (
    <ReviewArticlePage
      slug="how-to-start-electricity-contract-review"
      title={pageTitle}
      lead={[
        "見直し担当者が最初に必要なのは、完璧な比較資料ではなく、全体の進め方です。順序を誤ると、資料不足や社内調整不足で途中停止しやすくなります。",
        "このページはカテゴリ5の起点として、請求書確認から切替後確認までを一連の実務フローで整理します。",
      ]}
      sections={[
        {
          heading: "法人の電力契約見直しを始める前に整理したいこと",
          paragraphs: [
            "まず、何をきっかけに見直すのかを明確にします。値上げ通知対応なのか、更新前対応なのか、使用実態変化への対応なのかで優先タスクが変わります。",
            "目的と期限を整理してから着手すると、比較作業だけが先行する状態を避けられます。",
          ],
        },
        {
          heading: "最初に確認したい請求書と契約書",
          paragraphs: [
            "請求書では現状の請求構造、契約書では更新条件・解約条件・通知期限を確認します。両方を見ないと、見直し可能時期と比較前提を正しく設定できません。",
            "契約書本文だけでなく、別紙や覚書も確認対象に含めることが重要です。",
          ],
        },
        {
          heading: "社内で確認したい情報と関係部署",
          paragraphs: [
            "見直しは一部署で完結しにくいため、総務・経理・施設管理・購買・拠点責任者の確認項目を早期に共有します。担当が曖昧だと、資料収集と決裁準備で停滞します。",
            "社内確認では、契約情報、請求情報、使用実態、設備変更予定を同じフォーマットで整理すると進行しやすくなります。",
          ],
        },
        {
          heading: "比較・見積取得に進む前の準備",
          paragraphs: [
            "見積比較は、前提条件をそろえて初めて意味を持ちます。使用量前提、契約電力、調整項目の扱い、契約期間条件を統一してから比較へ進みます。",
            "単価差だけで判断せず、年間総額、契約条件、リスクの出方を評価軸として設定しておくことが重要です。",
          ],
        },
        {
          heading: "切替までを見据えた見直しの進め方",
          paragraphs: [
            "見直しは契約選定で終わりではなく、切替手続きと初回請求確認まで含めて完了です。開始日、検針日、請求期間のズレを事前に確認し、社内説明を準備します。",
            "切替後の確認結果を記録しておくと、次回更新時の判断をより迅速に進められます。",
          ],
        },
      ]}
      relatedIntro="見直し全体の入口として、最低限チェック項目・資料整理・社内確認・切替実務へ段階的に進める導線を用意しています。"
      relatedLinks={[
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "最初に押さえるべき確認項目を短時間で整理できます。",
        },
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "比較前に必要な資料の収集範囲を確認できます。",
        },
        {
          href: "/internal-checklist-for-electricity-contract-review",
          title: "法人の電力契約見直しで社内確認したい項目一覧",
          description: "部署連携で確認すべき実務項目を把握できます。",
        },
        {
          href: "/switching-business-electricity-contract",
          title: "法人が電力契約を切り替えるときの注意点",
          description: "見直し後半の切替実務と初回請求確認を整理できます。",
        },
        {
          href: "/compare",
          title: "比較ページ",
          description: "整理した前提で候補条件を比較できます。",
        },
        {
          href: "/",
          title: "シミュレーター",
          description: "自社条件に近い形で検討を始められます。",
        },
      ]}
      ctaDescription="全体手順を整理したら、使い方ページで準備を確認し、比較ページとシミュレーターで見直し判断を実行段階へ進めます。"
    />
  );
}
