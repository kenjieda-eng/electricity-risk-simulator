"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactElement, SVGProps } from "react";

type HeaderLink = {
  href: string;
  label: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  highlight?: boolean;
};

const RiskCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M12 3l8 4v6c0 4.2-3 8.2-8 9-5-0.8-8-4.8-8-9V7l8-4z" />
    <path d="M8.5 12l2.3 2.3 4.7-4.7" />
  </svg>
);

const HowToIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

const KnowledgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M4 6.5a2.5 2.5 0 0 1 2.5-2.5H20v15.5H6.5A2.5 2.5 0 0 1 4 17V6.5z" />
    <path d="M8 8h8M8 12h8M8 16h6" />
  </svg>
);

const RetrospectiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path d="M4 19.5h16M7 17V9m5 8V5m5 12v-6" />
    <path d="M6 9l5-4 5 6 2.5-2.5" />
  </svg>
);

const headerLinks: HeaderLink[] = [
  { href: "/", label: "電気料金上昇リスクを診断する", icon: RiskCheckIcon },
  { href: "/how-to", label: "電力料金上昇リスク診断の使い方", icon: HowToIcon },
  { href: "/articles", label: "法人向け電気料金の基礎知識", icon: KnowledgeIcon },
  { href: "/business-electricity-retrospective", label: "法人電気料金振り返り", icon: RetrospectiveIcon },
];

const isActivePath = (pathname: string, href: string): boolean => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export function PublicHeader() {
  const pathname = usePathname();
  const [simulationCount, setSimulationCount] = useState<number | null>(null);
  const [averageRiskScore, setAverageRiskScore] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadHeaderStats = async () => {
      try {
        const response = await fetch("/api/simulation-results/average", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        const json = (await response.json()) as {
          ok?: boolean;
          averageRiskScore?: number | null;
          count?: number;
        };
        if (!response.ok || !json.ok) return;

        setSimulationCount(
          typeof json.count === "number" && Number.isFinite(json.count) ? json.count : null
        );
        setAverageRiskScore(
          typeof json.averageRiskScore === "number" && Number.isFinite(json.averageRiskScore)
            ? json.averageRiskScore
            : null
        );
      } catch {
        if (controller.signal.aborted) return;
      }
    };

    void loadHeaderStats();
    return () => controller.abort();
  }, []);

  return (
    <header data-public-header="true" className="border-b border-sky-300 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href="/" aria-label="法人向け電気料金上昇、高騰リスクシミュレーターへ戻る">
            <Image
              src="/logo.png"
              alt="法人向け電気料金上昇、高騰リスクシミュレーターのロゴ"
              width={300}
              height={57}
              className="h-auto w-[250px] sm:w-[286px]"
              priority
            />
          </Link>
          <p className="text-base font-medium leading-tight text-slate-700 sm:text-lg">
            法人向け電気料金上昇、高騰リスクシミュレーター
          </p>
          <p className="text-sm font-semibold leading-tight text-blue-600 sm:text-base">
            電気代の値上がりリスクを30秒で診断
          </p>
        </div>

        <nav aria-label="主要導線" className="mt-4">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-3">
            {headerLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              const Icon = link.icon;
              const baseClass =
                "flex items-center gap-2 border-b-2 border-transparent px-3 py-2 text-[14px] leading-tight transition-colors duration-150";
              const highlightedClass = active
                ? "bg-sky-700 text-white border-sky-700"
                : "bg-sky-50 text-sky-800 hover:bg-sky-200 hover:border-sky-400";
              const normalClass = active
                ? "text-sky-700 border-sky-600 font-semibold"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:border-sky-400";

              return (
                <li key={link.href} className="min-w-0 lg:flex-1">
                  <Link
                    href={link.href}
                    className={`${baseClass} ${link.highlight ? highlightedClass : normalClass}`}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-xs font-semibold text-slate-600">シミュレーション実施回数（最新）</p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {simulationCount !== null ? `${simulationCount.toLocaleString("ja-JP")} 回` : "-"}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-xs font-semibold text-slate-600">リスク平均スコア（最新）</p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {averageRiskScore !== null ? `${averageRiskScore.toFixed(1)} / 100` : "-"}
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}
