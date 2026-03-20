type FlowStep = {
  title: string;
  description: string;
};

type FlowDiagramProps = {
  heading?: string;
  steps: FlowStep[];
};

export default function FlowDiagram({ heading, steps }: FlowDiagramProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      {heading ? <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{heading}</h3> : null}
      <div className="mt-4 flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col lg:flex-row lg:items-center">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">{step.description}</p>
            </div>
            {index < steps.length - 1 ? (
              <>
                <span className="mx-auto my-1 text-slate-400 lg:hidden" aria-hidden>
                  ↓
                </span>
                <span className="mx-3 hidden text-slate-400 lg:inline" aria-hidden>
                  →
                </span>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
