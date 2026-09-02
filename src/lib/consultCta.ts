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
 *   3営業日以内に返信          … 同 :292 / FAQ :115 / InquiryTypeSelector:173-174
 */
export const CONSULT_FACTS = [
  "初回相談 無料",
  "中立・特定の電力会社への勧誘なし",
  "営業電話なし",
  "3営業日以内に返信",
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
 * 内訳は `cta_from` / `variant` で分ける（`source` は GA4 の予約語のため送らない）。
 * ※ `contact_cta_view` はインライン導線からは送らない（ファネル指標をカード単独の
 *    系列として維持するため。詳細は InlineConsultLink.tsx のコメント）。
 */
export function buildInlineConsultEvent(from: string) {
  return { cta_from: from, variant: "inline" as const };
}

/**
 * ContactCtaCard の可視状態を StickyConsultBar へ伝えるカスタムイベント名（#335）。
 *
 * バーは `fixed inset-x-0 bottom-0 z-50` で画面下端 57px を占有するため、カードの CTA
 * ボタンがその帯に入っている間クリックを奪う（1440×900 で `elementFromPoint` が
 * `ASIDE` を返すことを実測）。カードが少しでも見えている間はバーを隠して共存させる。
 *
 * ※ 通知は `contact_cta_view`（threshold 0.5・1回限り）とは**別の** IntersectionObserver
 *    で行う。view の発火条件を変えないため。
 */
export const CONSULT_CARD_VISIBLE_EVENT = "consult-card-visible";
export const CONSULT_CARD_HIDDEN_EVENT = "consult-card-hidden";

/** 「✕」で閉じた状態の保存先キー。 */
export const CONSULT_BAR_DISMISSED_KEY = "consult-bar-dismissed";

/**
 * バーを閉じた状態を読む。
 *
 * `sessionStorage` を使う理由: `useState` のみだとページ遷移のたびに復活し、
 * 8月の `cta_dismiss` 509件はその産物だった。一方 `localStorage` は永続しすぎるため
 * 採用しない（既存方針を維持）。タブを閉じれば復活する中間案とする。
 *
 * SSR・プライベートモード等でアクセスが例外を投げる環境があるため、失敗時は false を
 * 返して呼び出し側が `useState` のみで動く現行挙動へフォールバックできるようにする。
 */
export function readConsultBarDismissed(): boolean {
  try {
    if (typeof sessionStorage === "undefined") return false;
    return sessionStorage.getItem(CONSULT_BAR_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

/** バーを閉じた状態を保存する。失敗しても呼び出し側の動作を止めない。 */
export function writeConsultBarDismissed(): void {
  try {
    if (typeof sessionStorage === "undefined") return;
    sessionStorage.setItem(CONSULT_BAR_DISMISSED_KEY, "1");
  } catch {
    // プライベートモード等。保存できなくても当該ページ内は useState で非表示を保つ。
  }
}
