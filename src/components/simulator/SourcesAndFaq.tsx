import Link from "next/link";

export type SourceItem = {
  name: string;
  url?: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

type SourcesAndFaqProps = {
  sources?: SourceItem[];
  faq?: FaqItem[];
  author?: string;
  publishedAt?: string;
};

export default function SourcesAndFaq({
  sources,
  faq,
  author = "江田健二（一般社団法人エネルギー情報センター 代表理事）",
  publishedAt,
}: SourcesAndFaqProps) {
  return (
    <>
      {faq && faq.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
          <div className="mt-4 divide-y divide-slate-200">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group py-3 first:pt-0 last:pb-0"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold leading-7 text-slate-900 sm:text-base">
                  <span>{item.question}</span>
                  <span className="ml-4 shrink-0 text-slate-400 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {sources && sources.length > 0 && (
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-semibold text-slate-900">
            出典・データソース
          </h2>
          <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
            {sources.map((source) => (
              <li key={source.name} className="flex items-start gap-1">
                <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                {source.url ? (
                  <span>
                    <Link
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      {source.name}
                    </Link>
                    {source.description ? ` — ${source.description}` : ""}
                  </span>
                ) : (
                  <span>
                    {source.name}
                    {source.description ? ` — ${source.description}` : ""}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-slate-200 pt-3 text-xs text-slate-500">
            <p>著者: {author}</p>
            {publishedAt && <p>公開日: {publishedAt}</p>}
          </div>
        </section>
      )}
    </>
  );
}
