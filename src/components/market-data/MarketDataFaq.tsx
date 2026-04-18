type Props = {
  heading?: string;
  items: { question: string; answer: string }[];
};

export default function MarketDataFaq({ heading = "よくある質問（FAQ）", items }: Props) {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
      <div className="mt-4 divide-y divide-slate-200">
        {items.map((item, i) => (
          <details key={i} className="group py-3">
            <summary className="cursor-pointer text-base font-semibold text-slate-900 hover:text-sky-700">
              <span className="mr-2 text-sky-700">Q.</span>
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mr-2 font-semibold text-slate-900">A.</span>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
