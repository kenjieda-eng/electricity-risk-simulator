/**
 * 相談導線（ContactCtaCard / InlineConsultLink）で共有する定数とパラメータ組み立て。
 *
 * React に依存しない純粋モジュールとして切り出している理由:
 *   - 相談条件の文言を1箇所に集約し、カードとインライン導線で表記がずれないようにするため。
 *   - 本リポジトリのテストは node 環境（jsdom / @testing-library なし）で動くため、
 *     コンポーネントを描画せずに GA4 送信値とリンク形式を検証できるようにするため。
 */

/**
 * カード・インライン導線に常時表示する相談条件。
 * すべて /contact に既出の事実のみで構成し、誇大表現は含めない。
 *   初回相談 無料              … src/app/contact/page.tsx:118-120, :453
 *   中立・勧誘なし             … 同 :380, :517
 *   営業電話なし               … 同 :300
 *   2営業日以内に返信          … 同 :292 / FAQ :115 / InquiryTypeSelector:173-174
 */
export const CONSULT_FACTS = [
  "初回相談 無料",
  "中立・特定の電力会社への勧誘なし",
  "営業電話なし",
  "2営業日以内に返信",
] as const;

/**
 * 記事内インライン相談導線の設置位置。GA4 の `cta_from` と `/contact?from=` に使う。
 * ContactCtaCard（記事末尾）の `source="article"` と衝突しない値にしてあり、
 * カード経由とインライン経由をGA4上で分離して集計できる。
 */
export const INLINE_CONSULT_SOURCES = {
  /** 目次直下（本文内 中央値 9.3% 地点） */
  toc: "mid-article-toc",
  /** 関連ページ直上（本文内 中央値 85.6% 地点） */
  related: "mid-article-related",
} as const;

export type InlineConsultSource =
  (typeof INLINE_CONSULT_SOURCES)[keyof typeof INLINE_CONSULT_SOURCES];

/** インライン導線の /contact リンク。カードと同じ `from=` の体系に揃える。 */
export function buildInlineConsultHref(from: string): string {
  return `/contact?from=${encodeURIComponent(from)}`;
}

/**
 * インライン導線クリック時に `contact_cta_click` へ渡すパラメータ。
 * イベント名はカードと共通にして /contact 到達クリックの総量を1系列で追えるようにし、
 * 内訳は `cta_from` / `variant` で分ける。
 * ※ `contact_cta_view` はインライン導線からは送らない（ファネル指標をカード単独の
 *    系列として維持するため。詳細は InlineConsultLink.tsx のコメント）。
 */
export function buildInlineConsultEvent(from: string) {
  return { source: from, cta_from: from, variant: "inline" as const };
}
