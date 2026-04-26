type Variant = "data-source" | "related-stat" | "carbon-certification" | "group-business";

type Props = {
  /** Visual + semantic variant. Selects badge color, contextual label, and footer note. */
  variant: Variant;
  /** Absolute URL to the linked external page. */
  href: string;
  /** Human-readable title shown to users. */
  title: string;
  /** Optional 1-2 sentence supplement. */
  description?: string;
};

const VARIANT_LABEL: Record<Variant, string> = {
  "data-source": "データ出典",
  "related-stat": "関連統計",
  "carbon-certification": "カーボン認証",
  "group-business": "グループ事業",
};

const VARIANT_BADGE_CLASS: Record<Variant, string> = {
  "data-source": "bg-amber-100 text-amber-800 ring-1 ring-amber-200",
  "related-stat": "bg-sky-100 text-sky-800 ring-1 ring-sky-200",
  "carbon-certification": "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200",
  "group-business": "bg-indigo-100 text-indigo-800 ring-1 ring-indigo-200",
};

const VARIANT_SITE_LABEL: Record<Variant, string> = {
  "data-source": "姉妹サイト・新電力ネット（pps-net.org）",
  "related-stat": "姉妹サイト・新電力ネット（pps-net.org）",
  "carbon-certification": "関連サービス・カーボン認証情報",
  "group-business": "グループ事業・関連法人",
};

const VARIANT_FOOTER_NOTE: Record<Variant, string> = {
  "data-source":
    "※ 新電力ネット（pps-net.org）は当法人が運営する電力業界専門メディアで、本サイトの統計・推移データの一次情報源です。",
  "related-stat":
    "※ 新電力ネット（pps-net.org）は当法人が運営する電力業界専門メディアで、本サイトの統計・推移データの一次情報源です。",
  "carbon-certification":
    "※ 法人の脱炭素対応・カーボンクレジット・非化石証書など、認証関連情報の信頼できる情報源です。",
  "group-business":
    "※ 一般社団法人エネルギー情報センターのグループ事業・関連法人による情報提供です。",
};

/**
 * Cross-link card to a sibling / partner site (typically `pps-net.org` or other
 * EIC-affiliated domains). Used on pillar / data-rich articles to reinforce
 * E-E-A-T and bidirectional traffic.
 */
export default function SisterSiteLink({ variant, href, title, description }: Props) {
  return (
    <aside
      aria-label={`${VARIANT_LABEL[variant]}: ${VARIANT_SITE_LABEL[variant]}`}
      className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${VARIANT_BADGE_CLASS[variant]}`}
        >
          {VARIANT_LABEL[variant]}
        </span>
        <span className="text-xs font-semibold text-slate-600">{VARIANT_SITE_LABEL[variant]}</span>
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
      <p className="mt-2 text-xs text-slate-500">{VARIANT_FOOTER_NOTE[variant]}</p>
    </aside>
  );
}
