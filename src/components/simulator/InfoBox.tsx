import type { ReactNode } from "react";

type InfoBoxProps = {
  title: string;
  children: ReactNode;
};

export default function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>
      <div className="mt-2 text-sm leading-7 text-slate-700">{children}</div>
    </div>
  );
}
