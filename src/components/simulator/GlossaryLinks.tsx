import Link from "next/link";

type GlossaryTerm = {
  label: string;
  href: string;
};

const GLOSSARY_TERMS: GlossaryTerm[] = [
  { label: "燃料費調整額", href: "/fuel-cost-adjustment" },
  { label: "市場価格調整額", href: "/market-price-adjustment" },
  { label: "再エネ賦課金", href: "/renewable-energy-surcharge" },
  { label: "容量拠出金", href: "/capacity-contribution-explained" },
  { label: "託送料金", href: "/wheeling-charge-explained" },
  { label: "基本料金", href: "/basic-charge-explained" },
  { label: "電力量料金", href: "/energy-charge-explained" },
  { label: "契約電力", href: "/contract-demand-what-is-it" },
  { label: "デマンド値", href: "/demand-value-guide" },
  { label: "力率", href: "/what-is-power-factor" },
  { label: "市場連動プラン", href: "/market-linked-plan" },
  { label: "固定プラン", href: "/fixed-price-plan" },
  { label: "JEPX", href: "/jepx-explained" },
  { label: "最終保障供給", href: "/last-resort-supply" },
  { label: "高圧電力", href: "/high-voltage-electricity-pricing" },
  { label: "特別高圧", href: "/extra-high-voltage-electricity-pricing" },
  { label: "非化石証書", href: "/non-fossil-certificates" },
  { label: "電気料金の内訳", href: "/business-electricity-bill-breakdown" },
];

type GlossaryLinksProps = {
  /** 現在のページのslugを渡すと、自ページへのリンクを除外する */
  currentSlug?: string;
  /** 表示する用語を絞り込む（指定がなければ全用語を表示） */
  terms?: string[];
};

export default function GlossaryLinks({ currentSlug, terms }: GlossaryLinksProps) {
  const filtered = terms
    ? GLOSSARY_TERMS.filter((t) => terms.includes(t.label))
    : GLOSSARY_TERMS;

  const display = currentSlug
    ? filtered.filter((t) => t.href !== `/${currentSlug}`)
    : filtered;

  if (display.length === 0) return null;

  return (
    <nav
      aria-label="関連用語リンク"
      className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
    >
      <p className="text-sm font-semibold text-slate-900">
        関連する用語を確認する
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {display.map((term) => (
          <Link
            key={term.href}
            href={term.href}
            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs text-slate-700 transition hover:border-sky-400 hover:bg-sky-50 hover:text-sky-800"
          >
            {term.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
