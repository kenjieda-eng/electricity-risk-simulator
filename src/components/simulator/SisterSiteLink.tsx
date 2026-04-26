type Variant = "data-source" | "related-stat";

type Props = {
  /** Visual + semantic variant. "data-source" = 出典バッジ / "related-stat" = 関連統計バッジ */
  variant: Variant;
  /** Absolute URL to the pps-net.org page. */
  href: string;
  /** Human-readable title shown to users. */
  title: string;
  /** Optional 1-2 sentence supplement. */
  description?: string;
};

const VARIANT_LABEL: Record<Variant, string> = {
  "data-source": "データ出典",
  "related-stat": "関連統計",
};

const VARIANT_BADGE_CLASS: Record<Variant, string> = {
  "data-source": "bg-amber-100 text-amber-800 ring-1 ring-amber-200",
  "related-stat": "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
};

const SISTER_SITE_LABEL = "姉妹サイト・新電力ネット（pps-net.org）";

/**
 * Cross-link card to the sibling EIC site `pps-net.org`.
 * Used on pillar / data-rich articles to reinforce E-E-A-T and bidirectional traffic.
 */
export default function SisterSiteLink({ variant, href, title, description }: Props) {
  return (
    <aside
      aria-label={`${VARIANT_LABEL[variant]}: ${SISTER_SITE_LABEL}`}
      className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${VARIANT_BADGE_CLASS[variant]}`}
        >
          {VARIANT_LABEL[variant]}
        </span>
        <span className="text-xs font-semibold text-slate-600">{SISTER_SITE_LABEL}</span>
      </div>
      <p className="mt-3 text-base font-semibold text-slate-900">
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="text-sky-800 underline-offset-2 hover:underline"
        >
          {title} ↗
        </a>
      </p>
      {description ? (
        <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
      ) : null}
      <p className="mt-2 text-xs text-slate-500">
        ※ 新電力ネット（pps-net.org）は当法人が運営する電力業界専門メディアで、本サイトの統計・推移データの一次情報源です。
      </p>
    </aside>
  );
}
