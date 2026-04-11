"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderSearch from "./search/HeaderSearch";

type HeaderLink = {
  href: string;
  label: string;
  iconSrc: string;
  highlight?: boolean;
};

const headerLinks: HeaderLink[] = [
  { href: "/", label: "TOP", iconSrc: "/icons/nav-top.png" },
  { href: "/simulate", label: "電気料金上昇リスクを診断する", iconSrc: "/icons/nav-risk-check.png" },
  { href: "/how-to", label: "電力料金上昇リスク診断の使い方", iconSrc: "/icons/nav-how-to.png" },
  { href: "/articles", label: "法人向け電気料金の基礎知識", iconSrc: "/icons/nav-knowledge.png" },
  {
    href: "/business-electricity-retrospective",
    label: "法人電気料金振り返り",
    iconSrc: "/icons/nav-retrospective.png",
  },
];

const specialFeatureLink = {
  href: "/special",
  label: "特集：有事シナリオ分析：26年4月",
};

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
    <header
      data-public-header="true"
      className="border-b-2 border-sky-500 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="relative mx-auto max-w-[1600px] px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" aria-label="法人向け電気料金上昇、高騰リスクシミュレーターへ戻る">
            <Image
              src="/logo.png"
              alt="法人向け電気料金上昇、高騰リスクシミュレーターのロゴ"
              width={300}
              height={57}
              className="h-auto w-[220px] sm:w-[300px] lg:w-[343px]"
              priority
            />
          </Link>
          <div className="min-w-0 w-full flex-1">
            <div className="flex items-center justify-end gap-2 mb-1.5 sm:mb-0 sm:absolute sm:right-4 sm:top-3 sm:gap-3 lg:right-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 rounded-md border border-amber-400 bg-amber-50 px-2.5 py-1.5 text-xs font-semibold leading-tight text-amber-900 shadow-sm transition hover:bg-amber-100 hover:border-amber-500 sm:px-3 sm:py-2 sm:text-sm"
                aria-label="お問い合わせ・ご相談受付ページへ移動"
              >
                <span aria-hidden="true">✉</span>
                お問い合わせ・ご相談
              </Link>
              <HeaderSearch />
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <p className="text-sm font-medium leading-tight text-slate-700 sm:text-lg">
                法人向け電気料金上昇、高騰リスクシミュレーター
              </p>
              <p className="text-sm font-semibold leading-tight text-blue-600 sm:text-lg">
                電気代の値上がりリスクを30秒で診断
              </p>
            </div>
            <div className="mt-3 flex flex-col gap-2 sm:mt-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex">
                <Link
                  href={specialFeatureLink.href}
                  className="inline-flex items-center rounded-md border border-violet-300 bg-violet-50 px-3 py-1.5 text-sm font-semibold leading-snug text-violet-900 transition hover:bg-violet-100 sm:py-2 sm:text-xl"
                  aria-label="特集：有事シナリオ分析：26年4月 特集一覧ページへ移動"
                >
                  {specialFeatureLink.label}
                </Link>
              </div>
              <section className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:min-w-[380px]">
                <div className="rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-2">
                  <p className="text-sm font-semibold text-slate-700 sm:text-xl">
                    診断実施回数:{" "}
                    <span className="text-base font-bold text-slate-900 sm:text-2xl">
                      {simulationCount !== null ? `${simulationCount.toLocaleString("ja-JP")} 回` : "-"}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-sky-200 bg-sky-50/70 px-3 py-2">
                  <p className="text-sm font-semibold text-slate-700 sm:text-xl">
                    リスク平均スコア:{" "}
                    <span className="text-base font-bold text-slate-900 sm:text-2xl">
                      {averageRiskScore !== null ? `${averageRiskScore.toFixed(1)} / 100` : "-"}
                    </span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <nav aria-label="主要導線" className="mt-4">
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-3">
            {headerLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              const baseClass =
                "flex items-center gap-2 border-b-2 border-transparent px-2.5 py-1.5 text-sm leading-tight transition-colors duration-150 sm:px-3 sm:text-[17px]";
              const highlightedClass = active
                ? "bg-sky-700 text-white border-sky-700"
                : "bg-sky-50 text-sky-800 hover:bg-sky-200 hover:border-sky-400";
              const normalClass = active
                ? "text-sky-700 border-sky-600 font-semibold"
                : "text-sky-900 hover:bg-sky-100 hover:text-sky-950 hover:border-sky-400";

              return (
                <li key={link.href} className={`min-w-0 ${link.href === "/" ? "lg:flex-[0.5]" : "lg:flex-1"}`}>
                  <Link
                    href={link.href}
                    className={`${baseClass} ${link.highlight ? highlightedClass : normalClass}`}
                    aria-current={active ? "page" : undefined}
                  >
                    <Image
                      src={link.iconSrc}
                      alt=""
                      aria-hidden="true"
                      width={26}
                      height={26}
                      className="h-6 w-6 shrink-0 sm:h-[26px] sm:w-[26px]"
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
